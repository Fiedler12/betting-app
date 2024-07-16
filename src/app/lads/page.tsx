import ProfileListElement from "../components/profileListElement";

interface lad {
    nickname: string;
    name: string;
    picturePath: string;
}

const lads: lad[] = [
  {
    nickname: "bejeweled",
    name: "Daniel",
    picturePath: "/farmaatten/daniel.jpg",
  },
  {
    nickname: "Cliffes",
    name: "Frederik",
    picturePath: "/farmaatten/frederik.jpg",
  },
  {
    nickname: "Digdude(founder)",
    name: "Mads",
    picturePath: "/farmaatten/mads.jpg",
  },
  {
    nickname: "Viser-Kurt",
    name: "Nicklas",
    picturePath: "/farmaatten/nicklas.jpg",
  },
  {
    nickname: "Den omvandrende kalender(Morbror Martin)",
    name: "Simon",
    picturePath: "/farmaatten/simon.jpg",
  },
  {
    nickname: "Tobias John Krøyer Duncan-King",
    name: "Tobias",
    picturePath: "/farmaatten/tobias.jpg",
  }, 
  {
    nickname: "diggg-Dude",
    name: "Oliver",
    picturePath: "/farmaatten/oliver.jpg"
  }
];

export default function Lads() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Lads
        </h3>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
            {lads.map(function(lad) {
                return (
                    ProfileListElement(lad.nickname, lad.name, lad.picturePath)
                )
            })}
        </ul>
      </div>
    </div>
  );
}
