const students = [
    { firstName: 'Marija', lastName: 'Mariovska', averageGrade: 4, gender: 'female', city: 'Skopje', age: 22 },
    { firstName: 'Vladimir', lastName: 'Nikolovski', averageGrade: 5, gender: 'male', city: 'Skopje', age: 25 },
    { firstName: 'Nikola', lastName: 'Vladimirovski', averageGrade: 2, gender: 'male', city: 'Skopje', age: 17 },
    { firstName: 'Diana', lastName: 'Bogoevska', averageGrade: 5, gender: 'female', city: 'Skopje', age: 30 },
    { firstName: 'Eva', lastName: 'Nikolovska', averageGrade: 3.5, gender: 'female', city: 'Skopje', age: 26 },
    { firstName: 'Bosko', lastName: 'Pavlov', averageGrade: 4, gender: 'male', city: 'Bitola', age: 21 },
    { firstName: 'Ilina', lastName: 'Anastasova', averageGrade: 4.5, gender: 'female', city: 'Skopje', age: 29 },
    { firstName: 'Hari', lastName: 'Delcev', averageGrade: 3.2, gender: 'male', city: 'Skopje', age: 19 },
    { firstName: 'Bobi', lastName: 'Ilijevski', averageGrade: 3.9, gender: 'male', city: 'Skopje', age: 23 },
  ];

  const filteredData = { sortedByGrade: students
    .filter(student => student.averageGrade > 3)
    .sort((a, b) => a.averageGrade - b.averageGrade)
    .map(student => `${student.firstName} ${student.lastName}`)}

    femaleGrade5: students
    .filter(student => student.gender === 'female' && student.averageGrade === 5)
    .map(student => `${student.firstName} ${student.lastName}`)

    maleSkopjeOver18: students
    .filter(student => student.gender === 'male' && student.city === 'Skopje' && student.age > 18)
    .map(student => `${student.firstName} ${student.lastName}`)

    avgGradesFemalesOver24: students
    .filter(student => student.gender === 'female' && student.age > 24)
    .map(student => student.averageGrade)

    maleBOver2: students
    .filter(student => student.gender === 'male' && student.firstName.startsWith('B') && student.averageGrade > 2)
    .map(student => `${student.firstName} ${student.lastName}`)


