function openModal(src, alt) {
    // Afficher la fenêtre modale en modifiant le style display
    document.getElementById('myModal').style.display = "block";
    
    // Mettre à jour la source de l'image dans la fenêtre modale
    document.getElementById('img01').src = src;
    
    // Mettre à jour le texte de la légende de l'image dans la fenêtre modale
    document.getElementById('caption').innerHTML = alt;
}

function closeModal() {
    // Cacher la fenêtre modale en modifiant le style display
    document.getElementById('myModal').style.display = "none";
}
