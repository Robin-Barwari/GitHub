const express = require("express");
const mongoose = require("mongoose");

const {Drivers} = require("./Drivers");
const {Items} = require("./Items");

const app = express();

app.use(express.json());

// Drivers who deliver items
app.get("/drivers", async (req, res) => {
    const allDrivers = await Drivers.find();
    return res.status(200).json(allDrivers);
});

app.get("/drivers/:name", async (req, res) => {
    const name = await Drivers.find({name: req.params.name});
    return res.status(200).json(name);
});

app.post("/drivers", async (req, res) => {
    const newDrivers = new Drivers(req.body);
    const insertedDrivers = await newDrivers.save();
    return res.status(201).json(insertedDrivers);
  });

app.put("/drivers/:name", async (req, res) => {
    const { name } = req.params;
    await Drivers.updateOne({ name }, req.body);
    const updatedDrivers = await Drivers.findById(name);
    return res.status(200).json(updatedDrivers);
});

// Items
app.get("/items", async (req, res) => {
    const allItems = await Items.find();
    return res.status(200).json(allItems);
});

app.get("/items/:item", async (req, res) => {
    const item = await Items.find({item: req.params.item});
    return res.status(200).json(item);
});

app.post("/items", async (req, res) => {
    const newItems = new Items(req.body);
    const insertedItems = await newItems.save();
    return res.status(201).json(insertedItems);
  });

app.put("/items/:item", async (req, res) => {
    const { item } = req.params;
    await Items.updateOne({ item }, req.body);
    const updatedItems = await Items.findById(item);
    return res.status(200).json(updatedItems);
});


const start = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://robin-barwari:Robin1234@cluster0.a8ynzad.mongodb.net/node-auth"
        );
        app.listen(3000, () => console.log("Server started on port 3000"));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();
