function ProfileComp({
                         name,
                         imageId,
                         ImgWidth,
                         ImgHeight,
                         profession,
                         numAwards,
                         AwardDesc,
                         Discovered
                     }) {
    return (<div>
        <section className="profile">
            <h2>{name}</h2>
            <img
                className="avatar"
                src={`https://i.imgur.com/${imageId}.jpg`}
                alt={name}
                width={ImgWidth}
                height={ImgHeight}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {profession}
                </li>
                <li>
                    <b>Awards: {numAwards} </b>
                    {AwardDesc}
                </li>
                <li>
                    <b>Discovered: </b>
                    {Discovered}
                </li>
            </ul>
        </section>

    </div>)
}

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <ProfileComp
                name={"Maria Skłodowska-Curie"}
                imageId={"szV5sdGs"}
                ImgWidth={70}
                ImgHeight={70}
                profession={"physicist and chemist"}
                numAwards={4}
                AwardDesc={"(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"}
                Discovered={"polonium (element)"}
            />

            <ProfileComp
                name={"Katsuko Saruhashi"}
                imageId={"YfeOqp2s"}
                ImgWidth={70}
                ImgHeight={70}
                profession={"geochemist"}
                numAwards={2}
                AwardDesc={"(Miyake Prize for geochemistry, Tanaka Prize)"}
                Discovered={"a method for measuring carbon dioxide in seawater"}
            />

        </div>
    );
}
