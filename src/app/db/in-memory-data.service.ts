import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Rule } from '../models/-rule';
import { Ruleref } from '../models/ruleref';
import { ScreenPanel } from '../models/screenpanel';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const rules = [

    ];
    const refs = [

    ];
    const panels = [

    ];
    return { rules, refs, panels}
  }
  
  getRuleId(rules : Rule[]): number {
    return rules.length > 0 ? Math.max(...rules
      .map(rule =>
        rule.id)) + 1 
      : 1
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
