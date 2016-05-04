                                    /*
Sample Structure:

gf_content =  [
                [ row 1
                  { block 1 },
                  { block 2 },
                  { block 3 }
                ],
                etc.
              ]

Rows can have 1 - 9 blocks.
                                    */

var gf_content = [
  [ // row
    { // block
      title: "Erick Romero",
      keywords: ["JavaScript", "AngularJS", "C#", "ASP.NET", "React", "NoSQL"],
      style: {
        backgroundColor: "#0091EA",
        fontSize: "25px",
        letterSpacing: "1px"
      }
    },
    { // block
      imageURL: "../assets/images/portfolio/SIGAD.png",
      keywords: ["JavaScript", "AngularJS", "AWS S3", "Node", "Virtualization"],
      style: {
        backgroundColor: "#0091EA",
      }
    }
  ],
  [ // row
    { // block
      title: "MINDFULNESS. CARE. AWARENESS.",
      customHeight: true,
      style: {
        backgroundColor: '#d88200',
        'font-weight': 'bold',
        height: '100px',
        color: '#373737',
        fontSize: "20px"
      }
    },
  ],
  [ // row
    { // block
      title: "Addendas",
      imageURL: "../assets/images/portfolio/Addenda.png",
      keywords: ["JavaScript", "AngularJS", "XML", "Financial"],
      style: {
        color: '#fff',
        backgroundColor: "#f1f1f2",
        'font-weight': 'bold',
        letterSpacing: "0.5px",
        fontSize: "25px"
      }
    },
  ]
]


var gf_styles = {
  squareMode: true,
  innerBlock: {
    fontFamily: "Helvetica",
    color: "#fff",
    padding: "10px"
  },
  blockTitle: {
    color: "#fff",
    margin: "0 auto",
    textTransform: "uppercase"
  },
  keyword: {
    fontSize: "11px",
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: "2px 5px",
    margin: "2px"
  },
  keywords: {
    fontSize: "10px",
    marginTop: "-50px"
  }
}
