import styled from "@emotion/styled"


import { OutletItem, OutletItemMedium, Thumbnail } from "../../components"
import { Flex, FlexItem, FlexSection } from "../../components/Flex"
import { TextHigh, TextHighBold } from "../../components/Text"

export function FeaturedVideos() {
  // const { searchTerm } = useSessionStore()
  // console.log('USE QUERY WITH', searchTerm)
  // const data = useQuery('videos', () => fetchVideos(searchTerm))
  const FeaturedFlexSection = styled(FlexSection)`
    background: #d3d3d3de;
    width: fit-content;
    align-self: center;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 15px;
    padding-top: 10px;
  `

  const mockData = {
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "SCNwmL91vAl6aCX3d6JVk8wWUJI",
        "id": {
          "kind": "youtube#video",
          "videoId": "AYJiI-1suHs"
        },
        "snippet": {
          "publishedAt": "2019-07-15T13:31:29Z",
          "channelId": "UC5ggtACLoJ3Ro8RNNgKfcvA",
          "title": "Absolutely Cute Dog &amp; Gorgeous Cat Compilation #7 | CuteVN",
          "description": "Thank you for watching, I hope you enjoyed! ▷ Watch more cute animal compilations!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/AYJiI-1suHs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/AYJiI-1suHs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/AYJiI-1suHs/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Cute VN",
          "liveBroadcastContent": "none",
          "publishTime": "2019-07-15T13:31:29Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "Mp28gE5ahKyCa7pHoxeh2Fye8X0",
        "id": {
          "kind": "youtube#video",
          "videoId": "t8tjT9MA7yU"
        },
        "snippet": {
          "publishedAt": "2016-04-25T18:06:43Z",
          "channelId": "UCx33n0OpAYlhs5i_boGYx6w",
          "title": "Funny Cats and Dogs Compilation",
          "description": "Subscribe for NoCAT NoLiFE: https://goo.gl/Na1Xxm ➔ Facebook FANPAGE: https://www.facebook.com/NoCatNoLifeC.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/t8tjT9MA7yU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/t8tjT9MA7yU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/t8tjT9MA7yU/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "NoCAT NoLiFE",
          "liveBroadcastContent": "none",
          "publishTime": "2016-04-25T18:06:43Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "gO4IST_TTTt3iEWZFO1sBKKIZAg",
        "id": {
          "kind": "youtube#video",
          "videoId": "BkD2nN5275c"
        },
        "snippet": {
          "publishedAt": "2020-02-19T20:53:36Z",
          "channelId": "UC09IvZwjpunzrdHH1EHok-w",
          "title": "🤣 Funniest 🐶 Dogs and 😻 Cats - Awesome Funny Pet Animals Videos 😇",
          "description": "Enjoy new funniest and very cute compilation of the week about try not laugh funny animals' life video. But some cats in this video ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/BkD2nN5275c/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/BkD2nN5275c/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/BkD2nN5275c/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Funny Animals' Life",
          "liveBroadcastContent": "none",
          "publishTime": "2020-02-19T20:53:36Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "YEJp2rLO4h8XpB551UBiZNNb2Nc",
        "id": {
          "kind": "youtube#video",
          "videoId": "y3VMhFCLxRc"
        },
        "snippet": {
          "publishedAt": "2014-08-05T18:56:38Z",
          "channelId": "UCVUdHi-tdW5AKdzMiTPG97Q",
          "title": "Cute Cats and Dogs Love Babies Compilation Part 2",
          "description": "Funny Cats and Dogs Love Babies | Cats and Dogs Love Babies | Cats Love Babies | Dogs Love Babies | Animals Love Babies ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/y3VMhFCLxRc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/y3VMhFCLxRc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/y3VMhFCLxRc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "funnyplox",
          "liveBroadcastContent": "none",
          "publishTime": "2014-08-05T18:56:38Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "T9z2lEKqZqDgFe0FgHP-ipBrOfY",
        "id": {
          "kind": "youtube#video",
          "videoId": "JuQLtbBZKxg"
        },
        "snippet": {
          "publishedAt": "2016-08-06T21:29:21Z",
          "channelId": "UCVUdHi-tdW5AKdzMiTPG97Q",
          "title": "Funny Cat and Dog Videos Compilation",
          "description": "The very best of funny cats and dogs 2016. These hilarious dog and cat videos are sure to turn anyone's frown upside down!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/JuQLtbBZKxg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/JuQLtbBZKxg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/JuQLtbBZKxg/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "funnyplox",
          "liveBroadcastContent": "none",
          "publishTime": "2016-08-06T21:29:21Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "gi7Kf8rmiezB7NDPCD-bsFbNh_8",
        "id": {
          "kind": "youtube#video",
          "videoId": "iPW75ZO4pIA"
        },
        "snippet": {
          "publishedAt": "2018-01-08T15:47:38Z",
          "channelId": "UCzVw9odnihM5PgKSv5UnDPA",
          "title": "Adorable Babies Playing With Dogs and Cats - Funny Babies Compilation 2018",
          "description": "In this video compilation you can meet funnie4st and adorable babies which love dogs and cats. This cute babies playing with ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/iPW75ZO4pIA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/iPW75ZO4pIA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/iPW75ZO4pIA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "BabiezTV",
          "liveBroadcastContent": "none",
          "publishTime": "2018-01-08T15:47:38Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "XPzFkjUcTpDTGuUnnl35gmXymSY",
        "id": {
          "kind": "youtube#video",
          "videoId": "PP7toELbdqA"
        },
        "snippet": {
          "publishedAt": "2021-08-13T09:38:45Z",
          "channelId": "UCOTtZqs7-0kLZ6zSxkIF5Gw",
          "title": "Cutest Babies Play With Dogs And Cats Compilation || Cool Peachy",
          "description": "Cutest Babies Play With Dogs And Cats Compilation || Cool Peachy. ▻ Link video: https://youtu.be/PP7toELbdqA ▻ Our playlist: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/PP7toELbdqA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/PP7toELbdqA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/PP7toELbdqA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "COOL PEACHY",
          "liveBroadcastContent": "none",
          "publishTime": "2021-08-13T09:38:45Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "4IQvjW3C-pCTSaunVgqI5GFaZaQ",
        "id": {
          "kind": "youtube#video",
          "videoId": "EtH9Yllzjcc"
        },
        "snippet": {
          "publishedAt": "2017-11-18T21:00:00Z",
          "channelId": "UC3rrzHpFzshYjIMk8YFc52w",
          "title": "Try Not To Laugh Challenge - Funny Cat &amp; Dog Vines compilation 2017",
          "description": "Try Not To Laugh or Grin While Watching Funny Dogs & Cats Vines compilation 2017 IMPOSSIBLE CHALLENGE! Subscribe to ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/EtH9Yllzjcc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/EtH9Yllzjcc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/EtH9Yllzjcc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "CooL Vines",
          "liveBroadcastContent": "none",
          "publishTime": "2017-11-18T21:00:00Z"
        }
      }
    ]
  }
  
  console.log('DATA IS FEATURED VIDEOS', mockData.items)
  
  return (
    <FeaturedFlexSection direction="row" align="center" justify="center" gap="40px" wrap={"wrap"}>
      <Flex direction="column" gap="10px">
        <TextHighBold>Featured</TextHighBold>
        <Thumbnail 
          isError={false} 
          imgURL={mockData.items[0].snippet.thumbnails.high.url} 
        />
      </Flex>
      <Flex direction="column" gap="10px">
        <TextHighBold>Related</TextHighBold>
        <OutletItem
          isError={false} 
          imgURL={mockData.items[1].snippet.thumbnails.default.url} 
          title={mockData.items[1].snippet.title}
          desc={mockData.items[1].snippet.description}
        />
        <OutletItem
          isError={false} 
          imgURL={mockData.items[2].snippet.thumbnails.default.url} 
          title={mockData.items[2].snippet.title}
        />
        <OutletItem
          isError={false} 
          imgURL={mockData.items[3].snippet.thumbnails.default.url} 
          title={mockData.items[3].snippet.title}
        />
      </Flex>
  </FeaturedFlexSection>)
}