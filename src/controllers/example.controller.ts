import Controller from "../lib/Controller";

class ExampleController extends Controller {
  public get() {
    const examples: Array<Example> = [
      new Example("example 1", "lorum"),
      new Example("exemple 2", "content 2"),
    ];

    return { success: true, examples };
  }
}

export default new ExampleController();
