const express = require("express");
const { Client } = require("@notionhq/client");
const cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var logger = require("morgan");

const app = express();

app.use(cors());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "reactapp/build")));

const PORT = 3000;
const HOST = "localhost";

//Création de variables avec les ID des databases
const NOTION_NUMBER_ID = "Rj%5BB";
const NOTION_TITLE_ID = "title";
const NOTION_DESCRIPTION_ID = "uM%40V";
const NOTION_TAGS_ID = "_%7BBm";

const client = new Client({
  auth: "secret_nkbhKhXLsU8Da0Ga9Q7WwdDtnSNrUTWG2ZMBiXH7GBO",
});

const databaseId = "72cee5574bb94d1da3d0cacaf19ce2ee";

//Création d'une fonction permettant de récupérer les informations de la base de donnée de notion
async function getDatabase() {
  const notionPages = await client.databases.query({
    database_id: databaseId,
  });

  console.log(notionPages.results, "notionPages.results[i]");

  const projectsData = [];
  for (let i = 0; i < notionPages.results.length; i++) {
    projectsData.push({
      number: notionPages.results[i].properties.number.number,
      title: notionPages.results[i].properties.title.title[0].text.content,
      description:
        notionPages.results[i].properties.description.rich_text[0].text.content,
      tags: notionPages.results[i].properties.tags.multi_select,
      urlTile:
        notionPages.results[i].properties.urlTile.rich_text[0].text.content,
      color: notionPages.results[i].properties.color.rich_text[0].text.content,
      kickLineTitle:
        notionPages.results[i].properties.kickLineTitle.rich_text[0].text
          .content,
      welcomeDescription:
        notionPages.results[i].properties.welcomeDescription.rich_text[0].text
          .content,
      urlWelcomeModal:
        notionPages.results[i].properties.urlWelcomeModal.rich_text[0].text
          .content,
      section1Title:
        notionPages.results[i].properties.section1Title.rich_text[0].text
          .content,
      section1Description:
        notionPages.results[i].properties.section1Description.rich_text[0].text
          .content,
      urlSection1:
        notionPages.results[i].properties.urlSection1.rich_text[0].text.content,
      section2Title:
        notionPages.results[i].properties.section2Title.rich_text[0].text
          .content,
      section2Description:
        notionPages.results[i].properties.section2Description.rich_text[0].text
          .content,
      urlSection2:
        notionPages.results[i].properties.urlSection2.rich_text[0].text.content,
      section3Title:
        notionPages.results[i].properties.section3Title.rich_text[0].text
          .content,
      section3Description:
        notionPages.results[i].properties.section3Description.rich_text[0].text
          .content,
      urlSection3:
        notionPages.results[i].properties.urlSection3.rich_text[0].text.content,
      urlGallery1:
        notionPages.results[i].properties.urlGallery1.rich_text[0].text.content,
      urlGallery2:
        notionPages.results[i].properties.urlGallery2.rich_text[0].text.content,
      urlGallery3:
        notionPages.results[i].properties.urlGallery3.rich_text[0].text.content,
      githubLink1:
        notionPages.results[i].properties.githubLink1.rich_text[0].text.content,
      githubLink2:
        notionPages.results[i].properties.githubLink2.rich_text[0].text.content,
      gitLinkText1:
        notionPages.results[i].properties.gitLinkText1.rich_text[0].text.content,
        gitLinkText2:
        notionPages.results[i].properties.gitLinkText2.rich_text[0].text.content,
    });
  }

  // function compareNumbers(a, b) {
  //   return a - b;
  // }
  // projectsData.sort(compareNumbers("number"));

  projectsData.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return a.number - b.number;
  });

  //Création de l'objet exploitable facilement par le backend
  return { /* number, title, description, tags,  */ projectsData };
}

app.get("/projectData", async (req, res) => {
  const data = await getDatabase();
  res.json(data);
});

app.listen(PORT, HOST, () => {
  console.log("starting proxy at " + HOST + ":" + PORT);
});
