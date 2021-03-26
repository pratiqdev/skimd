#!/usr/bin/env node
import chalk from 'chalk'

import config from './skimd-config.js'

import handleArguments from './comp/handleArguments.js'





const pack = {
        dataset: [],
        results: [],
        wait_list:[],
        performed: [],
        stats: {
            test_start:0,
            test_end:0,
            test_elapsed:0,
            total_files:0,
            total_tests:0,
            total_failed:0,
            total_characters:0,
        }
    }

;(async()=>{
    console.log('Skimd is here!')
    console.log(config.included_tests)

    
    
    try{


        ///////////////////////////////////////////////////////////////////////////////
        handleArguments(pack)
        .then(result => { accumulateFiles(result) })
        .then(result => { extractContents(result) })
        .then(result => { performTests(result) })
        .then(result => { createDocumentation(result) })      
        .then(result => { stopTimer(result, true) })      
        
        
        ///////////////////////////////////////////////////////////////////////////////
    }catch(err){
            console.log(chalk.red(err))
    }



})()
