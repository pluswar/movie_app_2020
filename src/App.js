function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name}></img>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "그레이브즈",
    image:
      "https://ww.namu.la/s/b6ab0480594d2cfdefb7214e996786e2ee009bc2bb82b2d1ccdebf2b589df238644d4f23d06ae89bcfd2b1aa48c02816c0ed1c9e70315f5f89fecd14af431362da3e1b3506c724b322f9a4063b15cbd807b758a73ef654688e31940bc476b19c",
    rating: 5,
  },
  {
    id: 2,
    name: "드레이븐",
    image:
      "https://ww.namu.la/s/291135a77411d1e015527361676f366f9ab6a03fe4a5263cb8b94e4c076c275e0e9302dbffe9b40e0e4292cb93b011814c6b429419f222ced507946f86e8365ec12eca9256858b0ee5222f75eeed60bb8c541e34584d8d04e5073533b329e0d3",
    rating: 4.7,
  },
  {
    id: 3,
    name: "루시안",
    image:
      "https://ww.namu.la/s/a93117b03582ac98fc8331ff0670f82b81288f65e18b60a033d6009dc1ced33aabe1afa251bb6b434826123d6438c6dcd0843ec54070f2cd9fb5714a2de275f9d10cc3e6bf5fa4e01608963bdecf500b2cc4ce61a597dba6ed4c0ffb6fbe7d46",
    rating: 4.2,
  },
  {
    id: 4,
    name: "미스포츈",
    image:
      "https://ww.namu.la/s/96382097aadf933d45b4441665b4dda8c63dd2e5e3b0613c6ec7863752322afe242a9747ccd00865df45e42c842a5b7a334bb5c2d6f196b58f94e4abc6d4578043fbb2f4c828717c6fd21fd3d575f8eb1a50c2136769ccd93852538bb5b0851b",
    rating: 4.8,
  },
  {
    id: 5,
    name: "베인",
    image:
      "https://ww.namu.la/s/16c4da69b6f230e08bd88829d31cc686af291d3feb0d2dd69d5731f58fa8128abf8536b75a76e92c5df54dc3594a3e398139e2afdab37acd3b407876413cfc4986058cf67a36c38b911cbd7794df25f039d4a25482f64c99b955602009555c81",
    rating: 4.2,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
