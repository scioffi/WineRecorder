const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./dbHandler");

const port = 5051;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

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

app.post("/saveTasting", async (req, res) => {
	const d = req.body;
	try {
		const insert = await db.query("INSERT INTO `tastings` \n(" +
			"`list_id`, " +
			"`owner`, " +
			"`date_created`, " +
			"`date_modified`, " +
			"`country`, " +
			"`producer`, " +
			"`grapes`, " +
			"`region`, " +
			"`appellation`, " +
			"`vintage`, " +
			"`price`, " +
			"`alcohol`, " +
			"`wine_type`, " +
			"`quality`, " +
			"`appearance_clarity`, " +
			"`appearance_intensity`, " +
			"`appearance_color`, " +
			"`appearance_notes`, " +
			"`nose_condition`, " +
			"`nose_intensity`, " +
			"`nose_characteristics`, " +
			"`nose_notes`, " +
			"`palate_sweetness`, " +
			"`palate_acidity`, " +
			"`palate_tannin`, " +
			"`palate_body`, " +
			"`palate_intensity`, " +
			"`palate_characteristics`, " +
			"`palate_finish`, " +
			"`palate_notes`, " +
			"`conclusion`" +
			")\n VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[
			d.list_id,
			d.owner,
			d.date,
			d.date,
			d.country,
			d.producer,
			d.grapes,
			d.region,
			d.appellation,
			d.vintage,
			d.price,
			d.alcohol,
			d.wine_type,
			d.quality,
			d.appearance_clarity,
			d.appearance_intensity,
			d.appearance_color,
			d.appearance_notes,
			d.nose_condition,
			d.nose_intensity,
			d.nose_characteristics,
			d.nose_notes,
			d.palate_sweetness,
			d.palate_acidity,
			d.palate_tannin,
			d.palate_body,
			d.palate_intensity,
			d.palate_characteristics,
			d.palate_finish,
			d.palate_notes,
			d.conclusion
		]);
console.warn(insert.sql);
		res.status(200).send("ok");
	} catch (e) {
		console.error(e);
		res.status(500).send("Failed to save Tasting");
	}
});

app.listen(port, () => console.log(`WineRecorder Backend listening on port ${port}`));
