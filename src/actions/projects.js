import { startFetching, error, setProjects } from "../redux/projectsSlice";
import client from "../sanityClient";

export const getProjects = async (dispatch) => {
  console.log("fetching projects from sanity...");
  dispatch(startFetching());
  try {
    const query = '*[_type == "project" && !(_id in path("drafts.**"))]';
    const projects = await client.fetch(query);
    dispatch(setProjects(projects));
  } catch (err) {
    dispatch(error());
  }
};
