export class DepartmentDto {
  departmentId: number;
  departmentName: string;
  employeeIds: number[];
  existed: boolean;

  constructor(
    departmentId: number,
    departmentName: string,
    employeeIds: number[],
    existed: boolean) {
    this.departmentId = departmentId ?? 0;
    this.departmentName = departmentName ?? '';
    this.employeeIds = employeeIds ?? [];
    this.existed = existed ?? true;
  }
}
