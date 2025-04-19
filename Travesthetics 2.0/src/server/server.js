import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import morgan from "morgan";
import cors from "cors";

const app = express();
const PORT = 5000;
app.use(cors({
    origin: "http://localhost:5173" 
  }));  
const API_URL = "https://api.geoapify.com/";
const apiKey = ""
const unsplashKey = ""


//Using Middlewares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan("dev"))
app.use(express.json());



//placeCount Varaiable for Updating the Location
let placeCount = 0;
let city = ""

//Array to Store PlacesResults and Images from APIs
let places = []
let images = []

//Places Categories Retreiving Function
function getChoices(category){
    let choices = ""
    switch (category) {
        case "date":
            choices = "catering,entertainment,leisure,tourism,beach,ski"
            break;
        case "fam":
            choices = "catering,entertainment,leisure,camping,national_park,beach,ski,religion,tourism,pet,commercial,accommodation"
            break;
        case "frnd":
            choices = "catering,entertainment,leisure,tourism,beach,ski,adult,man_made"
            break;            
        case "alone":
            choices = "entertainment,leisure,tourism,beach,ski,adult,man_made,commercial"
            break;
        default:
            console.log("No Matching Category Found")
            break;
    }

    return choices;
}

//Function for Randomizing the images
function getImages(images){
    
    let tempArray = JSON.parse(images) 
    let i = Math.floor(Math.random() * tempArray.length)

    return tempArray[i];
}



//Route For Recieving City Name
app.post("/api/findCity", async(req,res)=>{
    city = req.body["city"]
    console.log(city)

    try {
        const response = await axios.get(API_URL + "v1/geocode/search?"+ "type=city&apiKey="+ apiKey + "&text="+ city)
        const body = {cityNames: response.data.features}
        res.json(body);
    } catch (error) {
        console.log("Failed to Find The Exact City With This Name")
    }

})

app.post("/api/getrec", async(req,res)=>{
    const category = req.body["category"]   
    const placeId = req.body["placeID"]
    
    try {
        const response = await axios.get(API_URL + "v2/places?"  + "&categories=" + getChoices(category) +  "&filter=place:" + placeId + "&apiKey=" + apiKey + "&limit=20")
        console.log(response)

        //Request For Generating new Image on every New place traversal

    
        places = JSON.stringify(response.data.features)
        console.log(response.data.features);
        const body = {result: response.data.features}
        res.json(body)
    } catch (error) {
        console.log("Failed To Get Recommendations");
    }
})

//Route For Selecting Categories
app.get("/datu/:placeId", async (req,res)=>{
    console.log("Trigreed Succesfully")
    const body = {placeId: req.params.placeId,}
    res.render("categories.ejs", body)
})


//Home Route
app.get("/", (req,res)=>{
    placeCount = 0;
   res.render("index.ejs")
})

//CAtegories Route 
app.get("/categories", (req,res)=>{
    res.render("categories.ejs");
})



//Route for Showing Result
app.get("/:placeId/:category",async(req,res)=>{

    const category = req.params.category
    const placeId = req.params.placeId
    
    try {
        const response = await axios.get(API_URL + "v2/places?"  + "&categories=" + getChoices(category) +  "&filter=place:" + placeId + "&apiKey=" + apiKey + "&limit=20")
        console.log(response)

        //Request For Generating new Image on every New place traversal

        const imageData = await axios.get("https://api.unsplash.com/search/photos?" + "page=1" + "&per_page=20" + `&client_id=${unsplashKey}&query=${category} trip` + "&orientation=landscape")

        images = JSON.stringify(imageData.data.results)

        const firstImgElem = getImages(images)
    
        places = JSON.stringify(response.data.features)
        const body = {result: response.data.features[placeCount].properties, count: placeCount, listLength: places.length,imagesUrl: firstImgElem.urls.small, shotBy: firstImgElem.user}
        res.render("result.ejs", body )
       
    } catch (error) {
        res.render("result.ejs")
        console.log("Failed To Fetch from Api")
    }
    
} )


//Route For Traversing Through List of Places
app.post("/update/:paramName", (req,res)=>{
    const paramName = req.params.paramName
   
    const body = JSON.parse(places)
    

    const randomArrayElem = getImages(images)
   
        if(paramName == "next" && placeCount < body.length-1){
            placeCount++;
            res.render("result.ejs", {result: body[placeCount].properties, count: placeCount, listLength: body.length,imagesUrl: randomArrayElem.urls.small, shotBy: randomArrayElem.user});
        } else if(paramName == "previous"){
            placeCount--;
            res.render("result.ejs", {result: body[placeCount].properties, count: placeCount, listLength: body.length,imagesUrl: randomArrayElem.urls.small, shotBy: randomArrayElem.user});
        }else{
            console.error("Invalid Request!");
        }
    
    
})


//Route For User Input City name and then rendering a list for exact match
app.post("/datu", async(req,res)=>{
    const city = req.body["city"]
    console.log(city)

    try {
        const response = await axios.get(API_URL + "v1/geocode/search?"+ "type=city&apiKey="+ apiKey + "&text="+ city)
        const body = {cityNames: response.data.features}
        res.render("address.ejs", body);
    } catch (error) {
        console.log("Failed to fetch The api")
    }
})


app.listen(PORT, (req,res)=>{
    console.log("Server started at " + PORT);
})