import { mapProjectFromApiToVm } from '../../pods/project/project.mapper';
import * as apiModel from '../../pods/project/api/project.api-model';
import * as viewModel from '../../pods/project/project.vm';

describe('Project Mapper', () => {
  it('should map project correctly', () => {
    // Arrange defines datos ficticios para un proyecto proveniente de la API (projectFromApi).
    // Define your API project data here for testing
    const projectFromApi: apiModel.Project = {
      // Define tus datos de prueba de la API aquí
      id: '1',
      name: 'Test Project',
      externalId: '1',
      comments: 'Test comments',
      isActive: true,
      employees: [
        {
          id: '1',
          isAssigned: true,
          employeeName: 'Test Employee',
        },
      ],
    };

    // Act  llamas a la función de mapeo mapProjectFromApiToVm con los datos de prueba.
    const mappedProject: viewModel.Project =
      mapProjectFromApiToVm(projectFromApi);

    // Assert  utilizas expect de Jest para verificar que el resultado del mapeo (mappedProject) coincide con lo que esperas.
    expect(mappedProject).toEqual({
      // Define your expected mapped project data here
      id: '1',
      name: 'Test Project',
      externalId: '1',
      comments: 'Test comments',
      isActive: true,
      employees: [
        {
          id: '1',
          isAssigned: true,
          employeeName: 'Test Employee',
        },
      ],
    });
  });

  // Add more tests as needed
});
