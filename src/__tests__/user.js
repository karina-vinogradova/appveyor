import loadUser from '../loadUsers';
import { httpGet } from '../http';
// подключаем заглушку
jest.mock('../http.js'); // этот файл http.js должен стать моком

// сбрасываем все моки перед каждым тестом
beforeEach(() => {
  jest.resetAllMocks();
});

// Далее говорим что httpGet должен вернуть нам объект в строком эквиваленте
test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));
  loadUser(1);
  // Проверям что функция httpGet была вызвана с параметром 1
  expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});
