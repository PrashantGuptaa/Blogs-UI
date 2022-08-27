import { Select, Box, Chip, TextField, FormControl } from "@mui/material";
import { useState } from "react";
import "./blogDetails.css";
import { MenuItem, Checkbox, ListItemText } from "@mui/material";
import { blogsTags, specializations } from "./blogsData";

const BlogDetails = () => {
  const [blogName, setBlogName] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [tags, setTags] = useState([]);
  const [errors, setErrors] = useState({});

  const {
    blogName: nameError,
    blogDescription: descriptionError,
    specialization: specializationError,
    tags: tagsError,
  } = errors;
  return (
    <>
      <FormControl className="form">
        <div variant="h6" className="blogHeading">
          Blog Details
        </div>
        <div className="row">
          <TextField
            className="item"
            error={nameError}
            id="blog-name"
            label="Blog Name"
            placeholder="Name"
            defaultValue={blogName}
            helperText={nameError}
            variant="standard"
          />
          <TextField
            className="item"
            error={descriptionError}
            maxRows={4}
            multiline
            id="description-error"
            label="Short Description"
            placeholder="Description"
            defaultValue={blogDescription}
            helperText={descriptionError}
            variant="standard"
          />
        </div>
        <div className="row">
          <TextField
            className="item"
            error={specializationError}
            id="specialization"
            label="Specialization"
            placeholder="Specialization"
            defaultValue={specialization}
            helperText={specializationError}
            variant="standard"
            select
          >
            {specializations.map((option, i) => (
              <MenuItem key={`${i}-${option}`} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <Select
            className="item"
            error={tagsError}
            maxRows={4}
            multiple
            id="tags"
            label="Tags"
            placeholder="Tags"
            defaultValue={tags}
            helperText={tagsError}
            variant="standard"
            renderValue={(selected) =>
              selected.length === 0 ? (
                <em>Select Tags</em>
              ) : (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )
            }
          >
            {blogsTags.map((option, i) => (
              <MenuItem key={`${option}-${i}`} value={option}>
                <Checkbox checked={tags.indexOf(option) > -1} />
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </div>
      </FormControl>
    </>
  );
};

export default BlogDetails;
