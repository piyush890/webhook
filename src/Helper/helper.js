import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { jwtDecode } from "jwt-decode";
const convertDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
};



const downloadExcel = (data) => {
  if (!data || data.length === 0) return;

  // Format your data cleanly

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Payments");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const file = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  });

  saveAs(file, `Payments_${new Date().toISOString()}.xlsx`);
};

const checkAuth = () => {
  const localStorageToken = localStorage.getItem("start");
  if (localStorageToken) {
    const jswtData = jwtDecode(localStorageToken);
    if (jswtData.exp * 1000 > Date.now()) {
      return {
        isAuthenticated: true,
        user: jswtData.id,
        type: jswtData.roleId,
        name: jswtData.name,
        email: jswtData.email,
      };
    }
  }
  return false;
}

export { convertDate, downloadExcel, checkAuth };