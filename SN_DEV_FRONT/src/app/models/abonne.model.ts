export class AbonneModel {
    id: string;
    nom: string;
    prenom: string;
    age: number;
    sexe: string;
    profession: string;
    rue: string;
    code_postal: string;
    ville: string;
    pays: string;
    telephone: string;
    email: string;
    id_motivation: string;

    constructor(
        nom: string ="",
        prenom: string ="",
        age: number =0,
        sexe: string="",
        profession: string="",
        rue: string="",
        code_postal: string="",
        ville: string="",
        pays: string ="",
        telephone: string="",
        email: string="",
        id_motivation: string="",
    ){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.sexe = sexe;
        this.profession = profession;
        this.rue = rue;
        this.code_postal = code_postal;
        this.ville = ville;
        this.pays = pays;
        this.telephone = telephone;
        this.email = email;
        this.id_motivation = id_motivation;
    }
}