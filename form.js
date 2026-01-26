// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("jobForm");

  /* ========= ORG TYPE "OTHER" ========= */
  const orgOtherRadio = document.getElementById("orgTypeOther");
  const orgOtherInput = document.getElementById("orgOther");
  const orgTypeRadios = document.querySelectorAll("input[name='orgType']");

  orgTypeRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      orgOtherInput.classList.toggle("hidden", !orgOtherRadio.checked);
    });
  });

  /* ========= INDUSTRY "OTHER" ========= */
  const industrySelect = document.getElementById("industry");
  const industryOtherInput = document.getElementById("industryOther");

  industrySelect.addEventListener("change", () => {
    industryOtherInput.classList.toggle("hidden", industrySelect.value !== "Other");
  });

  /* ========= SAME AS FIRST CONTACT ========= */
  const sameAsFirst = document.getElementById("sameAsFirst");

  sameAsFirst.addEventListener("change", () => {
    document.getElementById("hrName").value =
      sameAsFirst.checked ? document.getElementById("contact1Name").value : "";

    document.getElementById("hrEmail").value =
      sameAsFirst.checked ? document.getElementById("contact1Email").value : "";
  });

  /* ========= B.TECH ALL ========= */
  const btechAll = document.querySelector(".btechAll");
  const btechBranches = document.querySelectorAll(".btech");

  btechAll.addEventListener("change", () => {
    btechBranches.forEach(cb => cb.checked = btechAll.checked);
  });

  /* ========= M.TECH ALL ========= */
  const mtechAll = document.querySelector(".mtechAll");
  const mtechBranches = document.querySelectorAll(".mtech");

  mtechAll.addEventListener("change", () => {
    mtechBranches.forEach(cb => cb.checked = mtechAll.checked);
  });

  /* ========= FORM SUBMIT ========= */
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop refresh

    // Optional: simple validation check
    if (!form.checkValidity()) {
      alert("Please fill all required fields.");
      return;
    }

    // SUCCESS MESSAGE
    alert("✅ Form successfully submitted!");

    // Reset form after submission
    form.reset();

    // Hide conditional fields again
    orgOtherInput.classList.add("hidden");
    industryOtherInput.classList.add("hidden");
  });

});
