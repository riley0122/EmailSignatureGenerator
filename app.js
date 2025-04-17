const nameInput = document.getElementById("Iname");
const titleInput = document.getElementById("Ititle");
const companyInput = document.getElementById("Icompany");
const companyLink = document.getElementById("IcompanyLink");
const telInput = document.getElementById("Itel");
const emailInput = document.getElementById("Iemail");
const imageInput = document.getElementById("Iimage");

nameInput.value = "";
titleInput.value = "";
companyInput.value = "";
companyLink.value = "";
telInput.value = "";
emailInput.value = "";
imageInput.value = "";

function placeName(name) {
    document.getElementById("sig_name").innerText = name;
}

function placeTitle(titleName) {
    document.getElementById("sig_title").innerText = titleName;
}

function placeCompany(companyName) {
    document.getElementById("sig_company").innerText = companyName;
}

function placeTel(telNr) {
    const tel = document.getElementById("sig_tel");
    tel.innerText = telNr;
    tel.href = `tel:${telNr.toString().split(' ').join()}`;
}

function placeMail(emailAddr) {
    const email = document.getElementById("sig_email");
    email.innerText = emailAddr;
    email.href = `mailto:${emailAddr}`;
}

nameInput.addEventListener("input", () => {
    placeName(nameInput.value);
});

titleInput.addEventListener("input", () => {
    placeTitle(titleInput.value);
})

companyInput.addEventListener("input", () => {
    placeCompany(companyInput.value);
})

telInput.addEventListener("input", () => {
    placeTel(telInput.value);
});

emailInput.addEventListener("input", () => {
    placeMail(emailInput.value);
});

companyLink.addEventListener("input", () => {
    document.getElementById("sig_company").href = companyLink.value;
});

imageInput.addEventListener("input", () => {
    document.getElementById("sig_image").setAttribute("src", imageInput.value);
});

function exportSignature() {
    const signature = document.getElementById('signature');
    const container = document.getElementById("outputContainer");

    const output = document.createElement("textarea");
    output.value = signature.outerHTML;

    container.appendChild(output);
}
