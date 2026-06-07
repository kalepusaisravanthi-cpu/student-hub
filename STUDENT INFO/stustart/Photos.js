import React from "react";
import "./Photos.css"; // Import CSS for styling
import Header from "../header";

const Photos = () => {
  const images = [
    "https://th.bing.com/th/id/OIP.ZqaOnVirRtxsSwKL_BMUZAHaE8?rs=1&pid=ImgDetMain",
    "https://tse4.mm.bing.net/th?id=OIP.5oeFpw7BfzjsAlWGkF1AugHaFj&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.-hJLhmdUaPPrHp1QUSaBnQHaE8&pid=Api&P=0&h=180",
    "https://th.bing.com/th/id/OIP.ch0y-tHS_KxYUrkWkZNragHaE8?w=292&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://i.ytimg.com/vi/iK0C-v57i84/maxresdefault.jpg",
    "https://th.bing.com/th/id/OIP.xDQZQnSFJAK51H6GimVVCwHaFj?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://tse1.mm.bing.net/th?id=OIP.Dyfkpfza7EZFdCvuXT2WywHaDU&pid=Api&P=0&h=180",
"https://th.bing.com/th/id/OIP.Z6SjoQRh_DpT_xgd0qI0mgHaE7?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.JN7ZezzIAizRwEnOjV0jzQAAAA?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.3OcjaC6yoIMMEPAWHKCsqQHaE8?w=242&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.D6cUqLQl0RltJDnDnoAWHQHaEK?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.F5KOvMtdAiFbokdRNUDBjwHaE7?w=293&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" , 
"https://th.bing.com/th/id/OIP.Qzh_Yv3hVtpXFTkN0wNm5wHaFj?w=245&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.ojNaKiiDao-7mE6dF_oMUgHaE8?w=243&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.kule3vTARucO8VMNp8fqTwHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.uw3MrjYMKDUZdmopxMasgQHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
"https://th.bing.com/th?id=OIP.yqOG1wXAO5sPTT2WrISVUQHaE7&w=136&h=104&c=7&bgcl=c211f6&r=0&o=6&cb=15&dpr=1.3&pid=13.1",
"https://th.bing.com/th?id=OIP.GBo4A9ZtjFd-H6DmYhoEbQHaDa&w=200&h=104&c=7&bgcl=651b06&r=0&o=6&cb=15&dpr=1.3&pid=13.1"
];

  return (
    <div className="photos-container">
    <div style={{marginLeft:"-20px",marginTop:"-20px"}}> <Header/></div>
       
      <h2 style={{marginLeft:"550px",fontFamily:"cursive"}}>Photo Gallery</h2>
      <div className="photo-grid">
        {images.map((src, index) => (
          <div key={index} className="photo-item">
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
