import HTML from "../../assets/icons/html.png";
import CSS from "../../assets/icons/css.png";
import REACT from "../../assets/icons/react.png";
import JS from "../../assets/icons/javascript.png";
import PHP from "../../assets/icons/php.png";
import BOOTSTRAP from "../../assets/icons/bootstrap.png";
import PYTHON from "../../assets/icons/python.png";
import GITHUB from "../../assets/icons/github.png";
import GIT from "../../assets/icons/git.png";
import ALGO from "../../assets/icons/algorithme.png";
import SEO from "../../assets/icons/SEO.png";
import ENGLISH from "../../assets/icons/anglais.png";
import MARKETING from "../../assets/icons/marketing.png";
import BAC from "../../assets/diplome/bac09.png";
import BEP from "../../assets/diplome/bep07.png";
import CAP from "../../assets/diplome/cap12.png";

let EducationData = [
  {
    date: "09/2011 à 07/2012",
    title: "CAP Conduite Routière de Marchandise",
    indicationSupplementaire: "(en apprentissage)",
    location: "AFT-IFTIM, Toulouse (31)",
    urlObtention: CAP,
    description:
      'La formation "Projet Pro" est un dispositif permettant de guider la reconversion professionnelle.',

    btnVideo: "Voir la vidéo de présentation du diplôme",
    urlVideo:
      "https://www.youtube.com/watch?v=ddAGB7rlayU&t=19s&ab_channel=Lyc%C3%A9eL%C3%A9onarddeVinciBlanquefort",
    redirectionVideo: "Vidéo du lycée Léonard de Vinci redirigée vers Youtube",
  },
  {
    date: "09/2007 au 06/2009",
    title: "Bac Pro Technicien Outilleur",
    indicationSupplementaire: "",
    location: "Lycée Professionnel Roland Garros, Toulouse (31)",
    obtentionDiplome: "Obtenu avec la mention Bien",
    urlObtention: BAC,
    description:
      "Le Bac pro Technicien Outilleur forme des techniciens qui réalisent, mettent au point, fabriquent, réparent et font la maintenance des outillages utilisés pour mouler, forger, découper ou façonner des matériaux en plastique, en métal ou en caoutchouc.",
    description2:
      "Pour cela, le technicien doit faire preuve de rigueur, de créativité et de précisions. Il a des connaissances en usinage et maîtrise les différents procédés de fabrication et de production.",

    btnVideo: "Voir la vidéo de présentation du diplôme",
    urlVideo:
      "https://www.youtube.com/watch?v=QOy-HAaGlAA&t=48s&ab_channel=OnisepToulouse",
    redirectionVideo: "Vidéo de l'onisep Toulouse redirigée vers Youtube",
  },
  {
    date: "09/2005 au 06/2007",
    title: "BEP Métier de la Production Mécanique Informatisée",
    indicationSupplementaire: "",
    location: "Lycée Professionnel Roland Garros, Toulouse (31)",
    obtentionDiplome: "",
    urlObtention: BEP,
    description:
      "Le titulaire de ce diplôme possède les compétences nécessaires pour réaliser et assembler un mécanisme. Il est capable d'intervenir dans la préparation d'un poste de travail et de réaliser des opérations d'usinage et d'autocontrôle pour la production de pièces mécaniques, des opérations élémentaires d'assemblage et de contrôle d'un mécanisme, des opérations de maintenance des moyens de production.",
    description2:
      "Sa culture technique lui permet d'appréhender le fonctionnement global d'un mécanisme, de mettre en oeuvre des procédés performants de fabrication et d'assemblage (machines à commandes numériques, machines à commande assistée), de prendre en compte les contraintes économiques associées aux exigences de qualité et de productivité.",
    description3:
      "Les qualités nécessaires sont : un goût pour l'informatique, le sens de la mécanique, l'adresse manuelle, la précision, le travail en autonomie, l'esprit méthodique et ordonné.",
    btnVideo: "Voir la vidéo de présentation du diplôme",
    urlVideo:
      "https://www.youtube.com/watch?v=5t2MIP9RUuE&ab_channel=EcoleProduction",
    redirectionVideo:
      "Vidéo de l'école de la Production redirigée vers Youtube",
  },
];
export default EducationData;
