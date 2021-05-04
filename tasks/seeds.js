const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const userData = data.users;
const furnitureData = data.furniture;
const rentalData = data.rental;
const commentData = data.comments;
const toggleFn = data.toggleFn;

async function main() {
	const db = await dbConnection();
	await db.dropDatabase();
	/** start of the testing code finish function below*/

	// create a user -> which means we will have userId first

	let userOne = await userData.createUser(
		(userName = "wyang"),
		(firstName = "wei"),
		(lastName = "yang"),
		(age = 100),
		(email = "wyang17@stevens.edu"),
		(password = "1234756"),
		(selfSummary = "Wyang summary")
	);

	const userOneId = userOne._id;
	console.log(userOneId);

	userOne = await userData.updateUserInfo((id = userOneId), (newUserInfo = { age: 200, email: "hey.weiyang@gmail.com" }));
	userOne = await userData.updateUserPassword((id = userOneId), (password = "12347567"));
	console.log(userOneId);

	// create furniture
	var furniture1 = await furnitureData.Create(
		(category = ["f", "u"]),
		(location = "A"),
		(price = 20),
		(description = "good"),
		(photos = []),
		(like = 23),
		(dislike = 3),
		(purchase_link = "www.link.com"),
		(sold = false),
		(contact = 1500000000)
	);
	const furniture1Id = furniture1._id;
	// console.log(furnitureOneId);

	var furniture2 = await furnitureData.Create(
		(category = ["f", "u"]),
		(location = "A"),
		(price = 20),
		(description = "good"),
		(photos = []),
		(like = 23),
		(dislike = 3),
		(purchase_link = "www.link.com"),
		(sold = false),
		(contact = 1500000000)
	);
	const furniture2Id = furniture2._id;
	// console.log(furnitureOneId);

	// toggle furniture into the userId
	await toggleFn.toggleFurnitureToUser(userOneId, furniture1Id);
	await toggleFn.toggleFurnitureToUser(userOneId, furniture2Id);

	// create comments
	// toggle comments into the furniture

	// create rental
	// toggle rental into the userId

	// create comments
	// toggle comments into the rental

	// delete userOne
	userOne_deleteInfo = await userData.deleteUser(userOneId);
	console.log(userOne_deleteInfo);
	/** End of the testing code */
	console.log("Done seeding database");
	await db.serverConfig.close();
}

main().catch(console.log);



