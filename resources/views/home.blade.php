<!-- resources/views/landing.blade.php -->

<!DOCTYPE html>
<html>

<head>
    <title>Landing Page</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>

<body>

    <header>
        <nav>
            <ul>
                <li><a href="#" class="default">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>

        <section class="hero">
            <h2>Hello !</h2>
            <h1>I’m <span class ="highlight">Nasrulloh</span> Fajar Muharam</h1>
            <p>A <span class ="highlight">front-end developer</span> who likes to learn new things and interested <br>
            in building websites that will help other people.</p><br>
            <a href="#" class="btn">See Portfolio</a>

        </section>

    </main>

    <footer>
        <p>&copy; 2023 Nasrulloh Fajar Muharam. All rights reserved.</p>
    </footer>
</body>
</html>
