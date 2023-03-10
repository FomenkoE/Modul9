const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Екатерина",
            "id_2": "Ольга",
            "id_3": "Оксана",
            "id_4": "Мария",
            "id_5": "Алевтина",
            "id_6": "Евгения",
            "id_7": "Алесандра",
            "id_8": "Юлия",
            "id_9": "Светлана",
            "id_10": "Дарья"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',


    //генератор случайных чисел, 
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
  

     // функция определения пола
     randomGender: function () {
        if (this.randomIntNumber() === 1) {
            return this.GENDER_MALE;
         } else { 
            return this.GENDER_FEMALE; 
         }
    },
    
        
    // возвращаемое значение из списка
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        
        return obj.list[prop];
    },
    
    // Генератор имени
            randomFirstName: function()  {  
            if  (this.randomGender() === this.GENDER_FEMALE){
               return this.randomValue(this.firstNameFemaleJson);
            } else {
                return this.randomValue(this.firstNameMaleJson);
            }
        
    },

// Генератор фамилии
     randomSurname: function() {
        let gender = this.randomIntNumber();
        let surnameMale = this.randomValue (this.surnameJson);
        let surnameFemale = (this.randomValue (this.surnameJson) + 'а');
        if (gender === 1) {
            console.log(surnameMale);
            return surnameMale;
        } else {
            console.log(surnameFemale);
            return surnameFemale;
        }

    },


    getPerson: function () {
        this.person = {};
        // this.person.gender = this.randomGender();
        this.person.gender = this.randomGender(); 
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        
        return this.person;
    }
};


    document.getElementById('generate-button').addEventListener('click', function () {
        const initPerson = personGenerator.getPerson();
        document.getElementById ('firstNameOutput').innerText = initPerson.firstName;
        document.getElementById ('surnameOutput').innerText = initPerson.surname;
    });
    
console.log(personGenerator.randomIntNumber());