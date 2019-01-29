import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Def } from '../models/-def';
import { Rule } from '../models/-rule';
import { Ruleref } from '../models/ruleref';
import { ScreenPanel } from '../models/screenpanel';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const defs = [
      // { id : 1, thing : '', definition : '', _ref :  },
      // { id : 1, thing : '', definition : '', _ref :  },
      // { id : 1, thing : '', definition : '', _ref :  },
      // { id : 1, thing : '', definition : '', _ref :  },
      // { id : 1, thing : '', definition : '', _ref :  },
      // { id : 1, thing : '', definition : '', _ref :  },
      // { id : 1, thing : '', definition : '', _ref :  },
    ];

    const rules = [
      // { id : 1, text : '', bonus : '', type : '', _ref :  },
      // { id : 1, text : '', bonus : '', type : '', _ref :  },
      // { id : 1, text : '', bonus : '', type : '', _ref :  },
      // { id : 1, text : '', bonus : '', type : '', _ref :  },
      // { id : 1, text : '', bonus : '', type : '', _ref :  },
      // { id : 1, text : '', bonus : '', type : '', _ref :  },
      // { id : 1, text : '', bonus : '', type : '', _ref :  },
      // { id : 1, text : '', bonus : '', type : '', _ref :  },
      // { id : 1, text : '', bonus : '', type : '', _ref :  },
      // { id : 1, text : '', bonus : '', type : '', _ref :  },
      // { id : 1, text : '', bonus : '', type : '', _ref :  },
      // { id : 1, text : '', bonus : '', type : '', _ref :  },
      // { id : 1, text : '', bonus : '', type : '', _ref :  },
    ];

    const refs = [
      { id : 1, title : 'Swim', _panel: 1 },
      { id : 2, title : 'Perception', _panel: 2 },
      { id : 3, title : 'Acrobatics', _panel: 2 },
      { id : 4, title : 'Conditions', _panel: 3 },
      { id : 5, title : 'Two-Weapon Fighting Penalties', _panel: 3 },
      { id : 6, title : 'Standard Actions', _panel: 4 },
      { id : 7, title : 'Free Actions', _panel: 4 },
      { id : 8, title : 'Vision & Light', _panel: 5 },
      { id : 9, title : 'XP per encounter', _panel: 6 },
      { id : 10, title : 'CR Equivalencies', _panel: 6 },

    ];

    const panels = [
      { id : 1, name : 'Minor Skills' },
      { id : 2, name : 'Major Skills' },
      { id : 3, name : 'Combat' },
      { id : 4, name : 'Actions' },
      { id : 5, name : 'Environment & Exploration' },
      { id : 6, name : 'Miscellaneous' },
    ];

    return { defs, rules, refs, panels}
  }
  
  getDefId(defs : Def[]): number {
    return defs.length > 0 ? Math.max(...defs 
      .map(def =>
        def.id)) + 1
      : 1;
  }

  getRuleId(rules : Rule[]): number {
    return rules.length > 0 ? Math.max(...rules
      .map(rule =>
        rule.id)) + 1 
      : 1;
  }

  getRrefId(refs : Ruleref[]): number {
    return refs.length > 0 ? Math.max(...refs
      .map(ref => 
        ref.id)) + 1
      : 1;
  }

  getPanelId(panels : ScreenPanel[]): number {
    return panels.length > 0 ? Math.max(...panels
      .map(panel =>
        panel.id)) + 1
        : 1;
  }

}
