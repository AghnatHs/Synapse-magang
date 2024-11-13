<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>HIMALKOM KOMNEWS DEMO</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-danger">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Himalkom Komnews Dev Ground</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="/komnews">Home</a>
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Pricing</a>
                </div>
            </div>
        </div>
    </nav>

    <div class="container mt-4">
        <a class="btn btn-danger" href="/komnews">All</a>
        @foreach ($categories as $category)
            <a class="btn btn-outline-primary" href="/komnews/category/{{ $category->slug }}"
                role="button">{{ $category->name }}</a>
        @endforeach
        <h1>{{ $title }}</h1>
        <hr class="my-4">
        <div class="jumbotron">
            <h1 class="display-4">TODAY HEADLINE !</h1>
            <img src={{ $headline->image }} alt="" style="width:30%">
            <h2>{{ $headline->title }}</h2>
            <p>{{ $headline->content }}</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="/komnews/{{ $headline->slug }}" role="button">Read More</a>
            </p>
            <hr class="my-4">
        </div>
        @foreach ($komnews->skip(1) as $item)
            <h2>{{ $item->title }}</h1>
                <p>{{ $item->content }}</p>
                <a class="btn btn-primary" href="/komnews/{{ $item->slug }}" role="button">Read More</a>
                @foreach ($item->categories()->get() as $category)
                    <a class="btn btn-outline-primary" href="/komnews/category/{{ $category->slug }}"
                        role="button">{{ $category->name }}</a>
                @endforeach
        @endforeach
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
    </script>
</body>

</html>
