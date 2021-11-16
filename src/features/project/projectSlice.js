import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    projects: [ "PizzaBird", "Onboarding Manager", "Chef Notes", "Movie Store"]
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {}
})

export const selectProject = state => state.project.projects

export default projectSlice.reducer