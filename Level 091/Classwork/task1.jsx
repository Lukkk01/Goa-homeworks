const languages = [
  "JavaScript", "Python", "Java", "C#", "PHP",
  "Ruby", "Swift", "Kotlin", "Go", "Rust"
];

export default function LanguagesList() {
  return (
    <ul>
      {languages.map((lang, index) => (
        <li
          key={index}
          onClick={(e) => console.log(lang, index, e)}
        >
          {lang}
        </li>
      ))}
    </ul>
  );
}
