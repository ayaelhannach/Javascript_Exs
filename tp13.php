<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $etudiants = [
            [
                "nom" => "el hannach",
                "prénom" => "Aya",
                "âge" => 18,
                "ville" => "Morocco",
                "note" => 15
            ],
            [
                "nom" => "el esmaili",
                "prénom" => "Qassam",
                "âge" => 29,
                "ville" => "Morocco",
                "note" => 18
            ],
            [
                "nom" => "Aarab",
                "prénom" => "Jihane",
                "âge" => 25,
                "ville" => "Morocco",
                "note" => 18
            ],
            [
                "nom" => "Xrif",
                "prénom" => "Asil",
                "âge" => 33,
                "ville" => "Bordeaux",
                "note" => 17
            ]
        ];
        foreach ($etudiants as $etudiant) {
            echo "Nom : " . $etudiant["nom"] . "\n";
            echo "Prénom : " . $etudiant["prénom"] . "\n";
            echo "Âge : " . $etudiant["âge"] . " ans\n";
            echo "Ville : " . $etudiant["ville"] . "\n";
            echo "Note : " . $etudiant["note"] . "/20\n";
           
        }
    ?>

</body>
</html>