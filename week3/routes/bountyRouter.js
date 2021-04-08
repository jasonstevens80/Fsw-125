
// Here is an array of bounty data for my server
const bounty = [
    {
      firstName: "Kylo",
      lastName: "Wren",
      living: "true",
      bountyAmount: 2000,
      type: "sith",
      _id: uuidv4(),
    },
    {
      firstName: "Luke",
      lastName: "Skywalker",
      living: "true",
      bountyAmount: 8000,
      type: "jedi",
      _id: uuidv4(),
    },
    {
      firstName: "Lando",
      lastName: "Calrissian",
      living: "true",
      bountyAmount: 5000,
      type: "smuggler",
      _id: uuidv4(),
    },
    {
      firstName: "Wilhuff",
      lastName: "tarkin",
      living: "True",
      bountyAmount: 10000,
      type: "admiral",
      _id: uuidv4(),
    },
  ];
  
  // Routes
  bountyRouter.get("/", (req, res) => { // a route to get the data from array
    res.send(bounty);
  });
  
  bountyRouter.post("/", (req, res) => { // a route to post data to the array
    const newBounty = req.body; //to add an id to new objects added to array
    newBounty._id = uuidv4();
    bounty.push(newBounty);
    res.send(
      `Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`
    );
  });
  
  module.exports = bountyRouter; // exporting variable to server to handle request