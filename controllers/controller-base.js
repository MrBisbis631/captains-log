class ControllerBase {
  constructor(route, app, model, authorized) {
    this.route = route;
    this.app = app;
    this.model = model;
    this.authorized = authorized;
  }

  get() {
    this.app.get(this.route, this.authorized, async (req, res) => {
      try {
        const result = await this.model.findAll();
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  }

  getById() {
    this.app.get(`${this.route}/:id`, this.authorized, async (req, res) => {
      try {
        const { id } = req.params;
        const result = await this.model.findByPk(id);
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  }

  post() {
    this.app.post(this.route, this.authorized, async (req, res) => {
      try {
        const result = await this.model.create(req.body);
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  }

  put() {
    this.app.put(`${this.route}/:id`, this.authorized, async (req, res) => {
      try {
        const { id } = req.params;
        const result = await this.model.update(req.body, { where: { id } });
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  }

  delete() {
    this.app.delete(`${this.route}/:id`, this.authorized, async (req, res) => {
      try {
        const { id } = req.params;
        const result = await this.model.destroy({ where: { id } });
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  }

  setup() {
    this.get();
    this.getById();
    this.post();
    this.put();
    this.delete();
  }
}
