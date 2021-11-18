// import { ClassExample1, ClassExample2 } from "../src/project"; // classes
import {DogMoods} from './../src/project.js'; // object

describe('DogMoods', () => {

  test('testMood.happy should be defined', () => {
    const testMood = new DogMoods("woof", "yip", "growl");
    expect(testMood.happy).toBeDefined();
  });
});

// expect(monster1.level).toBeDefined();