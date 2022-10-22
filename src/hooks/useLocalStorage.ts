/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject\src\hooks\useLocalStorage.ts
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-08 15:17:42
 */
interface IUseLocalStorage {
  setLocalStorage: (name: string, data: any) => void;
  getLocalStorage: (name: string) => any;
}

function useLocalStorage(): IUseLocalStorage {
  function setLocalStorage(name: string, data: any) {
    localStorage.setItem(name, JSON.stringify(data));
  }
  function getLocalStorage(name: string) {
    return JSON.parse(localStorage.getItem(name)!);
  }
  return {
    setLocalStorage,
    getLocalStorage
  }
}

export default useLocalStorage