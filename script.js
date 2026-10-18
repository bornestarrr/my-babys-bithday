
const confettiContainer = document.getElementById("confetti");
const balloonsContainer = document.getElementById("balloons");
const revealButton = document.getElementById("reveal-button");
const messageReveal = document.getElementById("message-reveal");
const personalMessage = document.getElementById("personal-message");

const colours = [
    "#D8C58A",
    "#F5F2DE",
    "#A9BE99",
    "#64845D",
    "#E8EBD9",
    "#D4AF65"
];

// Neo's personal birthday message
personalMessage.textContent = `It's my GOAT's birthday today. The biggest, baddest Wolfie. 🐺💚

Happy birthday, my baby! I wish you nothing but the greatest things this life has to offer, because if anyone deserves them, it's you. My Caramel Macchiato was born today, so this is a very special day for me too. Had to spend two whole years in this world without you, though. Imagine how much better my life would've been if you had just hurried up a little. 😭❤️

You are the high point of my year, and I want that to continue for the rest of our lives. Keep smiling, keep laughing, keep enjoying life, my sweet. You are my sunshine, one of the few things that keep me going, and I hope life gives you a million reasons to smile the way you make me smile.

I hope this new chapter of your life brings you closer to everything you've ever dreamed of. I hope you get to experience the kind of happiness that makes you stop for a moment and think, "Wow, life really is beautiful." I hope you never lose the little things that make you you, and that even as you grow and change, you always remember how special you are.

And baby, I hope you know that you don't have to do anything extraordinary to be special to me. You don't have to achieve anything, prove anything, or be anything other than yourself. I'm happy that you exist, happy that I get to know you, and even happier that I get to call you mine.

If there's one thing I want for you, it's for you to look back on this next year and realise just how much you've grown, how many beautiful moments you've experienced, and how many reasons you have to be proud of yourself. And I hope that, through all of it, I get to be right there beside you, cheering you on, ragebaiting you, making you laugh, and loving you through every chapter.

Happy birthday once again, my sweet. Here's to you, to your happiness, to all the memories we have yet to make, and to all the birthdays and milestones we get to celebrate together. I love you, my Caramel Macchiato. ❤️`;

// Create falling confetti
function createConfetti(amount = 250) {
    for (let i = 0; i < amount; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-30px";
        piece.style.width = Math.random() * 10 + 5 + "px";
        piece.style.height = Math.random() * 18 + 8 + "px";
        piece.style.backgroundColor =
            colours[Math.floor(Math.random() * colours.length)];
        piece.style.borderRadius =
            Math.random() > 0.5 ? "50%" : "2px";
        piece.style.opacity = Math.random() * 0.5 + 0.5;

        const duration = Math.random() * 4 + 4;
        piece.style.animation =
            `confettiFall ${duration}s linear forwards`;

        confettiContainer.appendChild(piece);

        setTimeout(() => piece.remove(), duration * 1000 + 500);
    }
}

// Send enormous balloons across the screen
function createBalloons(amount = 25) {
    const balloonEmojis = ["🎈", "🎈", "🎈", "💚"];

    for (let i = 0; i < amount; i++) {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.textContent =
            balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];

        const startSide = Math.floor(Math.random() * 3);

        balloon.style.fontSize = Math.random() * 65 + 65 + "px";

        if (startSide === 0) {
            balloon.style.left = Math.random() * 100 + "vw";
            balloon.style.top = "105vh";
        } else if (startSide === 1) {
            balloon.style.left = "-130px";
            balloon.style.top = Math.random() * 90 + "vh";
        } else {
            balloon.style.left = "105vw";
            balloon.style.top = Math.random() * 90 + "vh";
        }

        const duration = Math.random() * 5 + 7;

        balloon.style.animation =
            `balloonParty ${duration}s ease-in-out forwards`;

        balloonsContainer.appendChild(balloon);

        setTimeout(() => balloon.remove(), duration * 1000 + 500);
    }
}

// Add animation definitions
const animationStyles = document.createElement("style");

animationStyles.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translate(0, -20px) rotate(0deg);
        }
        25% {
            transform: translate(50px, 25vh) rotate(180deg);
        }
        50% {
            transform: translate(-40px, 50vh) rotate(360deg);
        }
        75% {
            transform: translate(60px, 75vh) rotate(540deg);
        }
        100% {
            transform: translate(-30px, 115vh) rotate(720deg);
        }
    }

    @keyframes balloonParty {
        0% {
            transform: translate(0, 0) rotate(-15deg) scale(0.7);
            opacity: 0;
        }
        15% {
            opacity: 1;
        }
        30% {
            transform: translate(35px, -20vh) rotate(15deg) scale(1.1);
        }
        60% {
            transform: translate(-35px, -55vh) rotate(-12deg) scale(1);
        }
        100% {
            transform: translate(25px, -120vh) rotate(15deg) scale(1.15);
            opacity: 0;
        }
    }
`;

document.head.appendChild(animationStyles);

// Reveal the message when the button is clicked
revealButton.addEventListener("click", () => {
    messageReveal.classList.remove("hidden");
    messageReveal.classList.add("show");

    revealButton.textContent = "A little love, just for you ♡";
    revealButton.disabled = true;

    createConfetti(300);
    createBalloons(12);
});

// Start the birthday celebration
window.addEventListener("load", () => {
    createConfetti(450);
    createBalloons(30);

    setTimeout(() => createConfetti(250), 700);
    setTimeout(() => createBalloons(15), 1200);
    setTimeout(() => createConfetti(250), 2200);
    setTimeout(() => createBalloons(15), 2800);
});
