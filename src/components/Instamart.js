import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="font-bold text-xl">{title}</h1>

      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus nam earum voluptates debitis, at cum praesentium autem voluptatum in molestiae sapiente quo quas deleniti incidunt beatae corrupti repudiandae. Fugit eaque, quidem omnis dignissimos nam ipsum odio rem itaque laborum. Aut exercitationem sit cupiditate sunt magnam iure optio omnis quo quasi impedit unde earum tenetur sapiente porro officia, molestiae aperiam. Dignissimos magnam adipisci suscipit facere consectetur error quasi autem sapiente veritatis modi, recusandae enim rem odio fugiat consequatur alias! Aliquid corrupti sunt corporis tempora molestiae esse expedita hic tenetur similique, non maxime asperiores reiciendis temporibus voluptate doloremque nostrum distinctio. Mollitia?"
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() =>setVisibleSection("about")  }
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus nam earum voluptates debitis, at cum praesentium autem voluptatum in molestiae sapiente quo quas deleniti incidunt beatae corrupti repudiandae. Fugit eaque, quidem omnis dignissimos nam ipsum odio rem itaque laborum. Aut exercitationem sit cupiditate sunt magnam iure optio omnis quo quasi impedit unde earum tenetur sapiente porro officia, molestiae aperiam. Dignissimos magnam adipisci suscipit facere consectetur error quasi autem sapiente veritatis modi, recusandae enim rem odio fugiat consequatur alias! Aliquid corrupti sunt corporis tempora molestiae esse expedita hic tenetur similique, non maxime asperiores reiciendis temporibus voluptate doloremque nostrum distinctio. Mollitia?"
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() =>setVisibleSection("team")  }
      />
      <Section
        title={"Career"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus nam earum voluptates debitis, at cum praesentium autem voluptatum in molestiae sapiente quo quas deleniti incidunt beatae corrupti repudiandae. Fugit eaque, quidem omnis dignissimos nam ipsum odio rem itaque laborum. Aut exercitationem sit cupiditate sunt magnam iure optio omnis quo quasi impedit unde earum tenetur sapiente porro officia, molestiae aperiam. Dignissimos magnam adipisci suscipit facere consectetur error quasi autem sapiente veritatis modi, recusandae enim rem odio fugiat consequatur alias! Aliquid corrupti sunt corporis tempora molestiae esse expedita hic tenetur similique, non maxime asperiores reiciendis temporibus voluptate doloremque nostrum distinctio. Mollitia?"
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() =>setVisibleSection("career")  }
      />
    </div>
  );
};

export default Instamart;
