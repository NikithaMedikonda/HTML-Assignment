function update(type_of) {
    var infotypele = document.getElementById("hello");
    if (type_of === 'home') {
        infotypele.value = 'home';
    } else if (type_of === 'about') {
        infotypele.value = 'about';
    } else if (type_of === 'services') {
        infotypele.value = 'services';
    } else if (type_of === 'gallery') {
        infotypele.value = 'gallery';
    } else if (type_of === 'contact') {
        infotypele.value = 'contact';
    } else {
        infotypele.value = 'request';
    }
}
