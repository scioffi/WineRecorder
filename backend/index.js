const app = require("express")();
const cors = require("cors");

const db = require("./dbHandler");

const port = 5051;

app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/getAllLists", async (req, res) => {
	try {
		const lists = await db.query("SELECT * FROM `lists` ORDER BY `id` DESC");
		res.status(200).send(JSON.stringify(lists[0]));
	} catch (e) {
		console.error(e);
		res.status(500).send("Failed to fetch lists");
	}
});

app.get("/getList/:list_id", async (req, res) => {
	const list_id = req.params.list_id;

	try {
		const lists = await db.query("SELECT * FROM `lists` WHERE `id`=?", [list_id]);
		res.status(200).send(JSON.stringify(lists[0][0]));
	} catch (e) {
		console.error(e);
		res.status(500).send("Failed to fetch lists");
	}
});

app.get("/getListTastings/:list_id", async (req, res) => {
	const list_id = req.params.list_id;

	try {
		const lists = await db.query("SELECT * FROM `tastings` WHERE `list_id`=?", [list_id]);
		res.status(200).send(JSON.stringify(lists[0]));
	} catch (e) {
		console.error(e);
		res.status(500).send("Failed to fetch list tastings");
	}
});

app.listen(port, () => console.log(`WineRecorder Backend listening on port ${port}`));
