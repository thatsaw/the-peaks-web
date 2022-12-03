import { Card } from "../components/Card";
import { Nav } from "../components/Nav";
import styles from "./Home.module.css";

export function Home() {
  return (
    <section>
      <Nav heading="Top stories" />
      <div className={styles.wrapper}>
        {data.map((post, index) => (
          <div
            key={post.title}
            className={styles.container}
            style={{
              gridArea: `area${index + 1}`,
            }}
          >
            <Card {...post} />
          </div>
        ))}
      </div>
      <div className={styles.flexer} style={{}}>
        {data.slice(0, 3).map((post) => (
          <div key={post.title}>
            <Card {...post} />
          </div>
        ))}
      </div>
    </section>
  );
}

const data = [
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    subtitle:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA14DAmV.img?h=0&w=600&m=6&q=60&u=t&o=f&l=f",
  },
  {
    title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    subtitle:
      "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhHS9bRmgHT5TUI_7hpx-4sKYVPiPRr5XOw&usqp=CAU",
  },
  {
    title:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    subtitle:
      "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
    image:
      "https://media.istockphoto.com/id/1356781450/photo/breaking-news-on-tv-man-watching-live-television-broadcast-program-covid19-coronavirus-and.jpg?b=1&s=170667a&w=0&k=20&c=4zCbL1uJ24T4IM9834a5JkSU0MZfnGdBpTdCR0N2j30=",
  },
  {
    title: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet",
    subtitle:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
    image: "http://c.files.bbci.co.uk/B9D1/production/_85196574_gmt.jpg",
  },
  {
    title: "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    subtitle: "el illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    image:
      "https://www.firstnews.co.uk/wp-content/uploads/2022/09/FN-Our-Mission-v2.jpeg",
  },
];
