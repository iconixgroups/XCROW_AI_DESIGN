import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from '../src/App';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders without crashing", () => {
  act(() => {
    render(<App />, container);
  });
});

it("renders upload component", () => {
  act(() => {
    render(<App />, container);
  });
  const uploadComponent = document.getElementById("uploadFile");
  expect(uploadComponent).toBeTruthy();
});

it("renders project details component", () => {
  act(() => {
    render(<App />, container);
  });
  const projectDetailsComponent = document.getElementById("projectDetails");
  expect(projectDetailsComponent).toBeTruthy();
});

it("renders discipline selection component", () => {
  act(() => {
    render(<App />, container);
  });
  const disciplineSelectionComponent = document.getElementById("disciplineSelection");
  expect(disciplineSelectionComponent).toBeTruthy();
});

it("renders quantity data component", () => {
  act(() => {
    render(<App />, container);
  });
  const quantityDataComponent = document.getElementById("quantityData");
  expect(quantityDataComponent).toBeTruthy();
});

it("renders export component", () => {
  act(() => {
    render(<App />, container);
  });
  const exportComponent = document.getElementById("exportData");
  expect(exportComponent).toBeTruthy();
});