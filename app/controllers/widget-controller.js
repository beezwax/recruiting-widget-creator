import layout from '../views/layout.js';
import form from '../views/form.js';
import Widget from '../models/widget.js';
import listPage from '../views/list.js';

export default {
  index(req, res) {
    const widgets = Widget.findAll();
    return res.send(layout({ title: 'Widgets', widgets }, listPage));
  },

  new(req, res) {
    const widget = new Widget();
    return res.send(layout({ title: 'New Widget', widget }, form));
  },

  create(req, res) {
    const widget = new Widget(req.body);
    widget.save();
    return res.redirect(`/`);
  },

  edit(req, res) {
    const widget = Widget.find(req.params.id);
    return res.send(layout({ title: `Widget #${widget.id}`, widget }, form));
  },

  update(req, res) {
    const widget = Widget.find(req.params.id);
    widget.update(req.body);
    widget.save();
    return res.redirect(`/`);
  }
}
