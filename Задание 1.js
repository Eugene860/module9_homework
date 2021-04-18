const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");
const nameNode1 = studentNode[0].querySelector("name");
const firstNameNode1 = nameNode1.querySelector("first");
const secondNameNode1 = nameNode1.querySelector("second");
const ageNode1 = studentNode[0].querySelector("age");
const profNode1 = studentNode[0].querySelector("prof");
const nameNode2 = studentNode[1].querySelector("name");
const firstNameNode2 = nameNode2.querySelector("first");
const secondNameNode2 = nameNode2.querySelector("second");
const ageNode2 = studentNode[1].querySelector("age");
const profNode2 = studentNode[1].querySelector("prof");

const langAttr1 = nameNode1.getAttribute("lang");
const langAttr2 = nameNode2.getAttribute("lang");
const result = {
  list: [{
  lang: langAttr1,
  first_name: firstNameNode1.textContent,
  second_name: secondNameNode1.textContent,
  age: Number(ageNode1.textContent),
  prof: profNode1.textContent
},
{  
  lang: langAttr2,
  first_name: firstNameNode2.textContent,
  second_name: secondNameNode2.textContent,
  age: Number(ageNode2.textContent),
  prof: profNode2.textContent
}]}
console.log(result);