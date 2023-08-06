import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { dependenciesArray } from "./mockData"

type DependencyObject = {
  dependencies: string;
  item: string;
};

const isVisited = (visited: string[], node: string): boolean => visited.includes(node);

const addDependenciesChecked = (checked: string[], unchecked: string[], node: string, dependenciesArray: DependencyObject[]): void => {
  for (const dep of dependenciesArray) {
    if (dep.item === node && !checked.includes(dep.dependencies)) {
      return;
    }
  }
  unchecked.push(node);
};

// Function to perform the topological sort
export const topologicalSort = (dependenciesArray: DependencyObject[]): string[] => {
  const checked: string[] = [];
  const unchecked: string[] = [];
  const visited: string[] = [];

  // Initialize unchecked with all unique dependencies
  for (const obj of dependenciesArray) {
    if (!unchecked.includes(obj.dependencies)) {
      unchecked.push(obj.dependencies);
    }
  }

  while (unchecked.length > 0) {
    const currentNode = unchecked.pop();
    if (currentNode && !isVisited(visited, currentNode)) {
      visited.push(currentNode);
      checked.push(currentNode);
      for (const obj of dependenciesArray) {
        if (obj.dependencies === currentNode && !isVisited(visited, obj.item)) {
          addDependenciesChecked(checked, unchecked, obj.item, dependenciesArray);
        }
      }
    }
  }

  return checked;
};

const sortedItems: string[] = topologicalSort(dependenciesArray);
console.log("Topologically Sorted Items:", sortedItems);


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <div>${sortedItems.map((item)=> item)}</div>

  </div>
`
