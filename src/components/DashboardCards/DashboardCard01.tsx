import React, { useState, useEffect } from "react";
import { useVisibleExtent } from "../../utils/VisibleExtentContext";
import { API_ENDPOINT } from "../../config/config";

const DashboardCard01 = () => {
  // const [csvData, setCsvData] = useState<string[]>([]);
  const [treeData, setTreeData] = useState([]);
  const [treeSpecies, setTreeSpecies] = useState([]);

  const [title, setTitle] = useState<string | null>(null);
  const { mapViewExtent } = useVisibleExtent();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();
        const species = data.trees.map((tree) => tree.Especie);
        setTreeSpecies(species);
      } catch (error) {
        console.error("Error fetching tree data", error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Fetch CSV data
  //       const response = await fetch("/arvores_0.csv");
  //       const data = await response.text();

  //       // Data in the H column
  //       const rows = data.split("\n");

  //       // Adjust index based on your CSV structure
  //       const csvItems = rows.slice(1).map((row) => {
  //         const columns = row.split(",");

  //         // Check if the column has a valid value before using trim
  //         const item = columns[7]?.trim() || "";

  //         // console.log("Item:", item);

  //         return item;
  //       });

  //       // Remove duplicates and sort alphabetically
  //       const uniqueCsvItems = Array.from(
  //         new Set(csvItems.filter(Boolean))
  //       ).sort();
  //       setCsvData(uniqueCsvItems);

  //       // Fetch title from the first row (H1 cell)
  //       const firstRowColumns = rows[0].split(",");
  //       setTitle(firstRowColumns[7]?.trim() || "");
  //     } catch (error) {
  //       console.error("Error fetching CSV data", error);
  //     }
  //   };

  //   fetchData();
  // }, [mapViewExtent]);

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 h-[55vh] relative">
      <div className="px-5 pt-5 flex flex-col h-full">
        {title && (
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 text-center mb-2 mt-2">
            Espécie e Variedade
          </h2>
        )}
        {/* Line to divide title and items list */}
        <hr className="border-t border-slate-300 my-0 border-4 rounded-xl" />
        {/* Items from CSV */}
        <div className="overflow-y-scroll py-2 max-h-full mb-4">
          {treeSpecies.map((species, index) => (
            <div key={index} className="text-sm mb-1">
              {species}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard01;
