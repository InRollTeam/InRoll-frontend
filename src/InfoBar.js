const InfoBar = () => {
  return (
    <div className="InfoBar container-fluid bg-dark row justify-content-between pb-5 pt-2">
      <div className="col-10 col-lg-4 bg-dark p-3 mx-5">
        <h3 className="text-white">Inroll</h3>
        <p className="text-white">
          Transforming the hiring process with our cutting-edge testing platform, 
          designed to streamline assessments and ensure the best talent fit for your organization.
        </p>
      </div>
      <div className="col-10 col-lg-4 bg-dark p-3 mx-5">
        <ul class="list-group list-group-flush bg-dark">
          <li class="list-group-item bg-dark text-white"><i class="bi bi-globe text-white fs-5"> Contact Us! </i></li>
          <li class="list-group-item bg-dark text-white"> <i class="bi bi-envelope-fill text-white fs-5"> contact@InRoll.com </i></li>
          <a href="#" class="list-group-item bg-dark text-white justify-content-between"> <i class="bi bi-linkedin text-white fs-5"> Linkedin </i></a>
          <a href="#" class="list-group-item bg-dark text-white"> <i class="bi bi-instagram text-white fs-5"> Instagram </i></a>
        </ul>
      </div>
    </div>
  );
}
 
export default InfoBar;