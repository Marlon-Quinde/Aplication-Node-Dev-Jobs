interface HandlebarsHelper {
  lookupProperty: Function;
  name: string;
  hash: object;
  fn: Function;
  inverse: Function;
  data: object;
  loc: object;
 }

module.exports = {
  seleccionarSkills: (seleccionadas = [], opciones: HandlebarsHelper) => {
    // console.log( '[OPCIONES]',opciones)
    const skills = [
      "HTML5",
      "CSS3",
      "CSSGrid",
      "Flexbox",
      "JavaScript",
      "jQuery",
      "Node",
      "Angular",
      "VueJS",
      "ReactJS",
      "React Hooks",
      "Redux",
      "Apollo",
      "GraphQL",
      "TypeScript",
      "PHP",
      "Laravel",
      "Symfony",
      "Python",
      "Django",
      "ORM",
      "Sequelize",
      "Mongoose",
      "SQL",
      "MVC",
      "SASS",
      "WordPress",
    ];

    let html = "";

    skills.forEach((skill) => {
      html += `
            <li>${skill}</li>
            `;
    });

    return html;
  },
};
