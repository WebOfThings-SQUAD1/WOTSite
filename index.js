const toTopButton = document.getElementById("toTop");
const teamMembersContainer = document.getElementById("teammembers");
const honor = document.getElementById('honor');

const scrollFunction = () =>{
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}

const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const teamMembers = [
    {
        id: 0,
        name: "Kyan Van Rossem",
        linkedIn: "https://www.linkedin.com/in/kyan-van-rossem/",
        email: "Kyan.vanrossem@hotmail.be",
        img: "kyan.jpg"
    },
    {
        id: 1,
        name: "Andries De Baere",
        linkedIn: "https://www.linkedin.com/in/andries-de-baere/",
        email: "Andries.debaere@gmail.com",
        img: "andries.jpg"
    },
    {
        id: 2,
        name: "Rien Pieters",
        linkedIn: "https://www.linkedin.com/in/rien-pieters/",
        email: "Pietersrien7@gmail.com",
        img: "rien.jpg"
    },
    {
        id: 3,
        name: "Lorenzo Verheecke",
        linkedIn: "https://www.linkedin.com/in/lorenzo-verheecke-208024160/",
        email: "lorenzo.verheecke@gmail.com",
        img: "lorenzo.jpg"
    },
    {
        id: 4,
        name: "Stef Verniers",
        linkedin: "https://www.linkedin.com/in/stef-verniers/",
        email: "stefverniers@gmail.com",
        img: "stef.jpg"
    },
    {
        id: 5,
        name: "Jonatan Verstraete",
        linkedIn: "https://www.linkedin.com/in/jonatan-verstraete-2151b3252/",
        email: "jonatan.verstraete@student.arteveldehs.be",
        img: "jonatan.jpg"
    },
    {
        id: 6,
        name: "Naboth Schulte",
        linkedIn: "www.linkedin.com/in/naboths",
        email: "Naboth.schulte1@gmail.com",
        img: "naboth.jpg"
    }
];

const honorableMembers = [
    {
        id: 0,
        name: "Tim De Paepe",
        linkedIn: "https://www.linkedin.com/in/tim-de-paepe-71311212/",
        img: "tim.jpg" 
    },
    {
        id: 1,
        name: "Kristof Raes",
        linkedIn: "https://www.linkedin.com/in/kristofraes/",
        img: "kristof.jpg"
    },
    {
        id: 2,
        name: "Frederick Roegiers",
        linkedIn: "https://www.linkedin.com/in/frederickroegiers/",
        img: "frederick.jpg"
    }
]

const loadTeamMembers = () => {
    teamMembers.forEach((member) => {
        // container for all member info
        const memberContainer = document.createElement("div");
        memberContainer.classList.add("team-member");
        
        // image
        const image = document.createElement("img");
        image.classList.add("team-member__image")
        image.src = `./assets/${member.img}`;
        image.alt = `Beautiful portrait of ${member.name}`
    
        // name
        const memberName = document.createElement("h2");
        memberName.innerText = member.name;
    
        // iconsContainer
        const iconsContainer = document.createElement("div");
        iconsContainer.classList.add("team-member__icons");
    
        // icons
        const linkedInIcon = document.createElement("i");
        linkedInIcon.classList.add("fab", "fa-linkedin");
        linkedInIcon.setAttribute("data", "linkedIn");
    
        const mailIcon = document.createElement("i");
        mailIcon.classList.add("fas", "fa-envelope");
    
    
        // link to linkedin
        const memberLinkedIn = document.createElement("a");
        memberLinkedIn.href = member.linkedIn;
        memberLinkedIn.target = "_blank";
        memberLinkedIn.appendChild(linkedInIcon);
    
        // link to email
        const memberEmail = document.createElement("a");
        memberEmail.href = `mailto:${member.email}`;
        memberEmail.appendChild(mailIcon);
    
        // append icons to iconsContainer
        iconsContainer.append(memberLinkedIn, memberEmail);        
    
        memberContainer.append(image, memberName, iconsContainer);
    
        teamMembersContainer.append(memberContainer);
    });
}

const loadHonorableMembers = () =>{
    honorableMembers.forEach((member) => {
        const memberContainer = document.createElement("div");
        memberContainer.classList.add("team-member");
        
        // image
        const image = document.createElement("img");
        image.classList.add("team-member__image")
        image.src = `./assets/${member.img}`;
        image.alt = `Beautiful portrait of ${member.name}`
    
        // name
        const memberName = document.createElement("h2");
        memberName.innerText = member.name;
    
        // iconsContainer
        const iconsContainer = document.createElement("div");
        iconsContainer.classList.add("team-member__icons");
    
        // icons
        const linkedInIcon = document.createElement("i");
        linkedInIcon.classList.add("fab", "fa-linkedin");
        linkedInIcon.setAttribute("data", "linkedIn");    
    
        // link to linkedin
        const memberLinkedIn = document.createElement("a");
        memberLinkedIn.href = member.linkedIn;
        memberLinkedIn.append(linkedInIcon);

        iconsContainer.append(memberLinkedIn);

        memberContainer.append(image, memberName, iconsContainer);
        honor.append(memberContainer)
    });
}

window.addEventListener('load',()=>{
    loadTeamMembers();
    loadHonorableMembers();
})

window.onscroll = function () {
    scrollFunction();
};

toTopButton.addEventListener("click", backToTop);
