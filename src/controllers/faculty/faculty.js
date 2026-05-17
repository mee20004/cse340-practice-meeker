import { getFacultyById, getSortedFaculty } from "../../models/faculty/faculty.js";

const facultyListPage = (req, res) => {
	const sortBy = req.query.sortBy || "name";
	const facultyList = getSortedFaculty(sortBy);
	res.render("faculty/list", { facultyList, sortBy, title: "Faculty Directory" });
};

const facultyDetailPage = (req, res) => {
	const facultyId = req.params.facultyId;
	const faculty = getFacultyById(facultyId);
	if (!faculty) {
		res.status(404).render("faculty/detail", { error: "Faculty member not found", title: "Faculty Not Found" });
		return;
	}
	res.render("faculty/detail", { faculty, title: faculty.name });
};

export { facultyListPage, facultyDetailPage };
