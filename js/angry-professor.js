function angryProfessor(k, a) {
    return a.sort()[k - 1] <= 0 ? 'NO' : 'YES';
}